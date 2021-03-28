import { notification as alert } from 'antd';

alert.config({
  placement: 'topRight',
  duration: 3
});

const success = async (description, message, key, options) => {
  if (key) {
    await alert.close(key);
  }
  alert.success({
    description,
    message: message || 'Success',
    key,
    ...options
  });
};

const info = async (description, message, key, options) => {
  if (key) {
    await alert.close(key);
  }
  alert.info({
    description,
    message: message || 'Info',
    key,
    ...options
  });
};

const error = async (description, message, key, options) => {
  if (key) {
    await alert.close(key);
  }
  alert.error({
    description,
    message: message || 'Error',
    key,
    ...options
  });
};

const warning = async (description, message, key, options) => {
  if (key) {
    await alert.close(key);
  }
  alert.warning({
    description,
    message: message || 'Warning',
    key,
    ...options
  });
};

export default { success, info, error, warning };
