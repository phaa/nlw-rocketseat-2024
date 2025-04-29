import { apiClient } from '../index';

export const CouponService = {
  async getCouponById(id: string) {
    const url = '/coupons/' + id;
    const coupon = await apiClient.get<string>(url);
    return coupon;
  }
};