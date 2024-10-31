import request from '@/utils/axios';
import type { BalanceResponse, BetSettingResponse } from '@/schema/account';

export const account = { getBalance, getBetSetting };

function getBalance(accountId: number | string): Promise<BalanceResponse> {
  return request({
    url: `/api/asia/account/${accountId}/Balance`,
    method: 'POST'
  });
}

function getBetSetting(): Promise<BetSettingResponse> {
  return request({
    url: '/api/Asia/Account/BetSetting',
    method: 'POST',
    data: {}
  });
}
