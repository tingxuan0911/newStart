import { z } from 'zod';

type BalanceResponse = z.infer<typeof balanceResponse>;
type JwtToken = z.infer<typeof jwtToken>;
type BetSettingResponse = z.infer<typeof betSettingResponse>;

export type { BalanceResponse, JwtToken, BetSettingResponse };

const balanceResponse = z.object({
  CurrentTotalPage: z.number(),
  CurrentPageSize: z.number(),
  CurrentPageIndex: z.number(),
  StatusCode: z.number(),
  Count: z.number(),
  TraceId: z.string(),
  Message: z.array(z.string()),
  Data: z.object({
    AvailableBalance: z.number()
  })
});

const jwtToken = z.object({
  UserName: z.string(),
  AccountId: z.number(),
  BuId: z.number(),
  UserId: z.number(),
  SourceTypeId: z.number(),
  AccountCode: z.string().optional(),
  UserCode: z.string().optional(),
  UserStatus: z.number().optional(),
  TLPAccountId: z.number().optional(),
  RootAccountId: z.number().optional(),
  ParentAccountId: z.number().optional(),
  AccountTypeId: z.number().optional(),
  PositionTypeId: z.number().optional(),
  AccountLevelId: z.number().optional(),
  AccountStatus: z.number().optional(),
  LobbyUrl: z.string().optional(),
  CreateTime: z.string().optional(),
  UserPhoto: z.string().optional(),
  ResetPasswordState: z.number().optional(),
  AccountParentsId: z.array(z.number()).optional(),
  PlatformId: z.number().optional(),
  IsMainUser: z.boolean().optional(),
  ExpTime: z.string().optional(),
  LoginId: z.string().optional(),
  SpreadGroupId: z.number().optional(),
  CurrencyId: z.number().optional(),
  CreditRecoveryModeId: z.number().optional(),
  IntegrationModeId: z.number().optional()
});

const betSettingResponse = z.object({
  CurrentTotalPage: z.number(),
  CurrentPageSize: z.number(),
  CurrentPageIndex: z.number(),
  StatusCode: z.number(),
  Count: z.number(),
  TraceId: z.string(),
  Message: z.array(z.string()),
  Data: z.array(
    z.object({
      MaxBetPerMatch: z.number(),
      MaxBetPerStake: z.number(),
      MinBet: z.number(),
      MarketTypeId: z.number()
    })
  )
});
