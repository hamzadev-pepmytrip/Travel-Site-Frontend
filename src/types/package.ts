import { Destination } from "./destination";

export interface Package {
id: number;
title: string;
description: string;
slug: string;
price: number;
image_url: string;
duration_days: number;
rating: number;
on_deal: boolean;
deal_start_date?: string;
deal_end_date?: string;
destination_id: number;
} 