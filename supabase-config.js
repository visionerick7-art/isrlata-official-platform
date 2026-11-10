
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ISRLATA-DKIP Supabase connection
const SUPABASE_URL=https://ecgqjnorfbkxhzkadtbj.supabase.co
const SUPABASE_PUBLISHABLE_KEY=sb_publishable_cxyT84JQk16QDTKU5RQpdA_2ltq3vQo

// Create the Supabase client
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
