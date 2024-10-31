import request from "@/utils/axios";
import type { LoginParams, LoginResponse } from "@/schema/user";

async function login(data: LoginParams): Promise<LoginResponse> {
  return request({
    url: `/api/User/Login`,
    method: "POST",
    data: data,
  });
}

export const user = {
  login,
};
