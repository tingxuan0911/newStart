import { z } from "zod";

type LoginParams = z.infer<typeof loginParams>;
type LoginResponse = z.infer<typeof loginResponse>;

export type { LoginParams, LoginResponse };

// 登入
const loginParams = z.object({
  LoginId: z.string(),
  Password: z.string(),
});


const loginResponse = z.object({
  CurrentTotalPage: z.number(),
  CurrentPageSize: z.number(),
  CurrentPageIndex: z.number(),
  StatusCode: z.number(),
  Count: z.number(),
  TraceId: z.string(),
  Message: z.array(z.string().nullish()),
  Data: z.object({
    jwtToken: z.string(),
    error: z.object({
      Ip: z.string(),
      Count: z.number(),
      FinalAllowGetCaptchaImg: z.string().datetime(),
    }),
  }),
});
