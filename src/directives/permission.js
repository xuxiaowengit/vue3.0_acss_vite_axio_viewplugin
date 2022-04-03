import store from '@/store';
function checkPermission(el, binding) {
  const { value } = binding;
  const points = store.getters.userInfo.permission.points;
  if (value && value instanceof Array) {
    const hasPermission = points.some((point) => {
      return value.includes(point);
    });
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  } else {
    throw new Error('v-permission value is ["admin"]');
  }
}

export default {
  mounted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
};
