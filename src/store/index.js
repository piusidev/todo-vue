/**
 * @typedef {Object} NotifyOptions
 * @property {string} type
 * @property {string} message
 * @property {number} timer
 */

const store = {
  state: {
    todo: {
      title: '',
      description: 'Your description here',
    },
    notify: {
      isVisible: false,
      type: 'error',
      message: 'enviando mensagem',
    },
  },
  /**
   * Send a notification based on the received options
   * @param { NotifyOptions } options
   */
  async notify(options) {
    await this.clearNotify();

    const { type, message, timer = 3000 } = options;

    this.state.notify = {
      isVisible: true,
      type: type,
      message: message,
    };

    this.state.notify.timeout = setTimeout(() => {
      this.state.notify.isVisible = false;
    }, timer);
  },
  /**
   * @returns {void}
   */
  clearNotify() {
    if (!this.state.notify.isVisible) {
      return;
    }

    this.state.notify.isVisible = false;
    clearTimeout(this.state.notify.timeout);
  },
};

export default store;
