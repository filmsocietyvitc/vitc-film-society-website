import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://elbjftgzybphdgbsxkqh.supabase.co";
const supabaseKey = "sb_publishable_kj5DIGXAgdpVlmRdE2AiBA_mqkUo3EA";

export const supabase = createClient(supabaseUrl, supabaseKey);