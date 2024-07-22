import axios from 'axios';
import { Logger } from 'winston';

interface CinetPayConfig {
  apiKey: string;
  siteId: string;
  notifyUrl: string;
  returnUrl: string;
}

class CinetPayService {
  private config: CinetPayConfig;
  private logger: Logger;

  constructor(config: CinetPayConfig, logger: Logger) {
    this.config = config;
    this.logger = logger;
  }

  async initiatePayment(amount: number, transactionId: string, currency: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
      amount,
      currency,
      description: 'Payment description',
      notify_url: this.config.notifyUrl,
      return_url: this.config.returnUrl,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment', payload);
      this.logger.info('Payment initiated', { transactionId, amount, currency });
      return response.data;
    } catch (error) {
      this.logger.error('Error initiating payment', { error });
      throw new Error('Error initiating payment');
    }
  }

  async verifyPayment(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/check', payload);
      this.logger.info('Payment verified', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error verifying payment', { error });
      throw new Error('Error verifying payment');
    }
  }

  async capturePayment(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/capture', payload);
      this.logger.info('Payment captured', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error capturing payment', { error });
      throw new Error('Error capturing payment');
    }
  }

  async authorizePayment(transactionId: string, amount: number, currency: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
      amount,
      currency,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/authorize', payload);
      this.logger.info('Payment authorized', { transactionId, amount, currency });
      return response.data;
    } catch (error) {
      this.logger.error('Error authorizing payment', { error });
      throw new Error('Error authorizing payment');
    }
  }

  async cancelPayment(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/cancel', payload);
      this.logger.info('Payment canceled', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error canceling payment', { error });
      throw new Error('Error canceling payment');
    }
  }

  async deletePayment(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/delete', payload);
      this.logger.info('Payment deleted', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error deleting payment', { error });
      throw new Error('Error deleting payment');
    }
  }

  async getPaymentStatus(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/status', payload);
      this.logger.info('Payment status retrieved', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error retrieving payment status', { error });
      throw new Error('Error retrieving payment status');
    }
  }

  async refundPayment(transactionId: string, amount: number) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
      amount,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/refund', payload);
      this.logger.info('Payment refunded', { transactionId, amount });
      return response.data;
    } catch (error) {
      this.logger.error('Error refunding payment', { error });
      throw new Error('Error refunding payment');
    }
  }

  async retrievePayment(transactionId: string) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/retrieve', payload);
      this.logger.info('Payment retrieved', { transactionId });
      return response.data;
    } catch (error) {
      this.logger.error('Error retrieving payment', { error });
      throw new Error('Error retrieving payment');
    }
  }

  async updatePayment(transactionId: string, data: any) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
      ...data,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/update', payload);
      this.logger.info('Payment updated', { transactionId, data });
      return response.data;
    } catch (error) {
      this.logger.error('Error updating payment', { error });
      throw new Error('Error updating payment');
    }
  }

  async updatePaymentData(transactionId: string, data: any) {
    const payload = {
      apikey: this.config.apiKey,
      site_id: this.config.siteId,
      transaction_id: transactionId,
      ...data,
    };

    try {
      const response = await axios.post('https://api.cinetpay.com/v1/payment/data/update', payload);
      this.logger.info('Payment data updated', { transactionId, data });
      return response.data;
    } catch (error) {
      this.logger.error('Error updating payment data', { error });
      throw new Error('Error updating payment data');
    }
  }
}

export default CinetPayService;
