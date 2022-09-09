export interface Exchange {
  id: string;
  name: string;
  year_established?: number;
  country?: string;
  description?: string;
  url: string;
  image?: string;
  has_trading_incentive?: boolean;
  trust_score?: number;
  trust_score_rank?: number;
  trade_volume_24h_btc?: number;
  trade_volume_24h_btc_normalized?: number;
}

export interface BadgeType {
  title: string;
  data?: number;
  link?: string;
}

export interface ExchangeDetailsType extends Exchange {
  twitter_handle?: string;
  facebook_url?: string;
  has_trading_incentive?: boolean;
  other_url_1?: string;
  other_url_2?: string;
  reddit_url?: string;
}
