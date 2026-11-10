
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ecgqjnorfbkxhzkadtbj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_cxyT84JQk16QDTKU5RQpdA_2ltq3vQo";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
