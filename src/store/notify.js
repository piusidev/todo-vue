/**
 * @typedef {Object} NotifyOptions
 * @property {string} type
 * @property {string} message
 * @property {number} timer
 */

export const notify = {
  state: {
    isVisible: false,
    type: 'error',
    message: 'enviando mensagem',
  },
  /**
   * Send a notification based on the received options
   * @param { NotifyOptions } options
   */
  async send(options) {
    await this.clearNotify();

    const { type, message, timer = 3000 } = options;

    this.state = {
      isVisible: true,
      type: type,
      message: message,
    };

    this.state.timeout = setTimeout(() => {
      this.state.isVisible = false;
    }, timer);
  },
  /**
   * @returns {void}
   */
  clearNotify() {
    if (!this.state.isVisible) {
      return;
    }

    this.state.isVisible = false;
    clearTimeout(this.state.timeout);
  },
};
