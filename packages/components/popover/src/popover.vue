<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { debounce, getZIndex } from '../../../utils/index.ts';
import type {
  AnimationType,
  EventHandlers,
  HandleType,
  PopoverProps,
  PositionMap,
  PositionType,
} from './popover.ts';

defineOptions({
  name: 'PriPopover',
});

const props = withDefaults(defineProps<PopoverProps>(), {
  animationName: 'fade',
  visible: false,
  trigger: 'hover',
  position: 'top',
  offset: 10,
  popoverClass: '',
  popoverStyle: undefined,
});

const popover = ref<HTMLElement>();
const popoverContent = ref<HTMLElement>();
const popoverReference = ref<HTMLElement>();
const zIndex = ref<number>(getZIndex());
const visible = ref<boolean>(props.visible);

function isPopoverReference(evt: MouseEvent) {
  return popoverReference?.value?.contains(evt.target as Node);
}

function isPopoverContent(evt: MouseEvent) {
  return popoverContent?.value?.contains(evt.target as Node);
}

const popperId = () => `pri-popover-${zIndex.value}`;

function calculatePosition(
  position: PositionType,
  offset: number = 10,
) {
  const contentDom = popoverContent.value!;
  const referenceDom = popoverReference.value!;

  const { width, height, top, left } = referenceDom.getBoundingClientRect();
  const { height: contentHeight, width: contentWidth }
    = contentDom.getBoundingClientRect();

  const positionMap: PositionMap = {
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

  return positionMap[position];
}

function getPopoverPosition() {
  const contentDom = popoverContent.value!;
  const referenceDom = popoverReference.value!;

  const { innerWidth, innerHeight } = window;
  const { clientWidth, clientHeight } = document.documentElement;
  const viewportWidth = innerWidth || clientWidth;
  const viewportHeight = innerHeight || clientHeight;

  const { top, left, right, bottom } = referenceDom.getBoundingClientRect();
  const { height: contentHeight, width: contentWidth }
    = contentDom.getBoundingClientRect();

  const { position, offset } = props;

  /**
   * 检查是否溢出并调整位置
   *
   * 假设弹出层位置为left，若左侧宽度不够，则自动改变为对向显示，其余方向类似。
   * 由于getBoundingClientRect API返回的值都是基于左上角为原点计算，因此
   * 在计算底部或者右边距离时，需要通过视口宽高算出真正距离
   */
  let final_left = 0;
  let final_top = 0;
  switch (position) {
    case 'top': {
      const { x: top_x, y: top_y } = calculatePosition('top', offset);
      const { y: bottom_y } = calculatePosition('bottom', offset);
      final_left = top_x;
      final_top = contentHeight > top ? bottom_y : top_y;
      break;
    }
    case 'right': {
      const { x: left_x } = calculatePosition('left', offset);
      const { x: right_x, y: right_y } = calculatePosition('right', offset);
      const realRightDistance = viewportWidth - right;
      final_left = contentWidth > realRightDistance ? left_x : right_x;
      final_top = right_y;
      break;
    }
    case 'bottom': {
      const { x: bottom_x, y: bottom_y } = calculatePosition('bottom', offset);
      const { y: top_y } = calculatePosition('top', offset);
      const realBottomDistance = viewportHeight - bottom;
      final_left = bottom_x;
      final_top = contentHeight > realBottomDistance ? top_y : bottom_y;
      break;
    }
    case 'left': {
      const { x: left_x, y: left_y } = calculatePosition('left', offset);
      const { x: right_x } = calculatePosition('right', offset);
      final_left = contentWidth > left ? right_x : left_x;
      final_top = left_y;
      break;
    }
    default:
      break;
  }

  return {
    final_left,
    final_top,
  };
}

function setPopoverStyle() {
  const contentDom = popoverContent.value!;

  // 计算DOM宽高使用，一种hack的解决方法
  contentDom.style.position = 'fixed';
  contentDom.style.display = 'block';
  contentDom.style.visibility = 'hidden';

  const { final_left, final_top } = getPopoverPosition();

  contentDom.style.left = `${final_left}px`;
  contentDom.style.top = `${final_top}px`;
  contentDom.style.position = `absolute`;
  contentDom.style.display = 'none';
  contentDom.style.visibility = 'visible';
  contentDom.style.zIndex = zIndex.value.toString();
}

function closePopoverOnOutSide(event: MouseEvent) {
  // 这里需要判断下target是否在所包裹的元素上和弹出层元素上触发的
  if (isPopoverReference(event) || isPopoverContent(event)) {
    return;
  }
  closePopover();
}

function creatContentDom() {
  const domId = popperId();
  if (document.getElementById(domId)) {
    return;
  }
  const contentDom = popoverContent.value!;
  contentDom.setAttribute('id', domId);
  document.body.appendChild(contentDom);
}

function showPopover() {
  if (visible.value) {
    return;
  }
  creatContentDom();
  setPopoverStyle();
  visible.value = true;
}

function closePopover() {
  visible.value = false;
}

function handleClick(evt: MouseEvent) {
  if (isPopoverReference(evt)) {
    visible.value ? closePopover() : showPopover();
  }
}

const debounceClosePopover = debounce(closePopoverOnOutSide, 200);
function handlePopoverEvent<K extends keyof EventHandlers>(
  eventType: K,
  handleType: HandleType,
) {
  const EVENT_MAP: EventHandlers = {
    click() {
      if (handleType === 'add') {
        popover.value?.addEventListener('click', handleClick);
        document.addEventListener('click', closePopoverOnOutSide);
      }
      else {
        popover.value?.removeEventListener('click', handleClick);
        document.removeEventListener('click', closePopoverOnOutSide);
      }
    },
    hover() {
      if (handleType === 'add') {
        popover.value?.addEventListener('mouseenter', showPopover);
        document.addEventListener('mousemove', debounceClosePopover);
      }
      else {
        popover.value?.removeEventListener('mouseenter', showPopover);
        document.removeEventListener('mousemove', debounceClosePopover);
      }
    },
  };
  const handleMethod = EVENT_MAP[eventType];
  handleMethod && handleMethod();
}

function removePopperDom() {
  const el = document.getElementById(popperId());
  el && document.body.removeChild(el);
}

function resizePopperPosition() {
  if (visible.value) {
    const contentDom = popoverContent.value!;
    const { final_left, final_top } = getPopoverPosition();
    contentDom.style.left = `${final_left}px`;
    contentDom.style.top = `${final_top}px`;
  }
}

const scaleClass = computed(() => {
  const position = props.position;
  const animationName: AnimationType = props.animationName;

  switch (animationName) {
    case 'fade': {
      return {
        enter: `fade-enter`,
        leave: `fade-leave`,
      };
    }
    case 'scale':
    case 'translate': {
      return {
        enter: `${animationName}-enter ${animationName}-${position}`,
        leave: `${animationName}-leave ${animationName}-${position}`,
      };
    }
    default: {
      return {
        enter: `fade-enter`,
        leave: `fade-leave`,
      };
    }
  }
});

onMounted(() => {
  handlePopoverEvent(props.trigger, 'add');
  window.addEventListener('resize', resizePopperPosition);
  window.addEventListener('scroll', resizePopperPosition);
});

onUnmounted(() => {
  handlePopoverEvent(props.trigger, 'remove');
  removePopperDom();
  window.removeEventListener('resize', resizePopperPosition);
  window.removeEventListener('scroll', resizePopperPosition);
});
</script>

<template>
  <div ref="popover" class="popover">
    <Transition
      :enter-active-class="scaleClass.enter"
      :leave-active-class="scaleClass.leave"
    >
      <div v-show="visible" ref="popoverContent" class="popover-content" :class="[props.popoverClass]" :style="props.popoverStyle">
        <slot name="content" />
      </div>
    </Transition>
    <span ref="popoverReference" class="reference-wrapper">
      <slot name="reference" />
    </span>
  </div>
</template>

<style scoped>
@import '../../../theme-chalk/common/animation.css';
@import '../../../theme-chalk/popover.css';
</style>
