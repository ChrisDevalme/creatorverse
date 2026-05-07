import { createClient } from '@supabase/supabase-js';
const URL = 'https://atvrljgjnmhpetbygyqz.supabase.co';
const API_KEY = 'sb_publishable_s5OrskR4SfeH0LwF2Hu4jw_xli4B9wJ';
export const supabase = createClient(URL, API_KEY);

