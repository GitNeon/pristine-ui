<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import type { PopoverProps } from './popover.ts';

defineOptions({
  name: 'PriPopover',
});

const props = withDefaults(defineProps<PopoverProps>(), {
  animationName: 'fade',
  visible: false,
  trigger: 'hover',
  position: 'top',
  offset: 10,
});

const popover = ref<HTMLElement>();
const popoverContent = ref<HTMLElement>();
const popoverReference = ref<HTMLElement>();

const visible = ref<boolean>(props.visible);

const isPopoverReference = (evt: MouseEvent) => popoverReference?.value?.contains(evt.target as Node);
const isPopoverContent = (evt: MouseEvent) => popoverContent?.value?.contains(evt.target as Node);

function setPopoverPosition() {
  const popoverContentDom = popoverContent.value!;
  const popoverReferenceDom = popoverReference.value!;

  const { innerWidth, innerHeight, scrollX, scrollY } = window;
  const { clientWidth, clientHeight } = document.documentElement;
  const viewportWidth = innerWidth || clientWidth;
  const viewportHeight = innerHeight || clientHeight;

  const { position, offset } = props;

  const { width, height, top, left, right, bottom } = popoverReferenceDom.getBoundingClientRect();
  const { height: contentHeight, width: contentWidth } = popoverContentDom.getBoundingClientRect();

  const positionMap = {
    top: {
      x: left + scrollX,
      y: top + scrollY - contentHeight - offset,
    },
    bottom: {
      x: left + scrollX,
      y: top + height + scrollY + offset,
    },
    left: {
      x: left + scrollX - contentWidth - offset,
      y: top + (height - contentHeight) / 2 + scrollY,
    },
    right: {
      x: left + width + scrollX + offset,
      y: top + (height - contentHeight) / 2 + scrollY,
    },
  };

  /**
   * 检查是否溢出并调整位置
   *
   * 假设弹出层位置为left，若左侧宽度不够，则自动改变为对向显示，其余方向类似。
   * 由于getBoundingClientRect API返回的值都是基于左上角为原点计算，因此
   * 在计算底部或者右边距离时，需要通过视口宽高算出真正距离
   */
  let final_left = 0;
  let final_top = 0;
  if (position === 'top') {
    final_left = positionMap.top.x;
    final_top = contentHeight > top ? positionMap.bottom.y : positionMap.top.y;
  }
  if (position === 'right') {
    const realRightDistance = viewportWidth - right;
    final_left = contentWidth > realRightDistance ? positionMap.left.x : positionMap.right.x;
    final_top = positionMap.right.y;
  }
  if (position === 'bottom') {
    const realBottomDistance = viewportHeight - bottom;
    final_left = positionMap.bottom.x;
    final_top = contentHeight > realBottomDistance ? positionMap.top.y : positionMap.bottom.y;
  }
  if (position === 'left') {
    final_left = contentWidth > left ? positionMap.right.x : positionMap.left.x;
    final_top = positionMap.left.y;
  }

  popoverContentDom.style.left = `${final_left}px`;
  popoverContentDom.style.top = `${final_top}px`;

  document.body.appendChild(popoverContentDom);
}

// 处理整个文档区域的点击事件
// 点击弹窗以外的地方也能关闭popover
function handleDocumentClick(evt: MouseEvent) {
  // 这里需要判断下target是否在所包裹的元素上和弹出层元素上触发的
  if (isPopoverReference(evt) || isPopoverContent(evt)) {
    return;
  }
  closePopover();
}

function showPopover() {
  visible.value = true;
  // 确保显示DOM后拿到最新的DOM结构
  nextTick(() => {
    setPopoverPosition();
    document.addEventListener('click', handleDocumentClick);
  });
}

function closePopover() {
  visible.value = false;
  document.removeEventListener('click', handleDocumentClick);
}

function handleClick(evt: MouseEvent) {
  console.log(evt.target);
  if (isPopoverReference(evt)) {
    if (visible.value) {
      closePopover();
    }
    else {
      showPopover();
    }
  }
}

onMounted(() => {
  if (props.trigger === 'click') {
    popover.value?.addEventListener('click', handleClick);
  }
});

onUnmounted(() => {
  if (props.trigger === 'click') {
    popover.value?.removeEventListener('click', showPopover);
  }
});
</script>

<template>
  <div ref="popover" class="popover">
    <Transition name="fade">
      <div v-if="visible" ref="popoverContent" class="popover-content">
        <slot name="content" />
      </div>
    </Transition>
    <span ref="popoverReference" class="reference-wrapper">
      <slot name="reference" />
    </span>
  </div>
</template>

<style scoped>
@import "../../../theme-chalk/common/transition.css";
@import "../../../theme-chalk/popover.css";
</style>
