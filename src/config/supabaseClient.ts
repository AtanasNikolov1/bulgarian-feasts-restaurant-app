import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aobglccxzvtijeoudbwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvYmdsY2N4enZ0aWplb3VkYndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNTY5OTYsImV4cCI6MjAzNzgzMjk5Nn0.mxf4PTe5jvZCOWgOvnH9DHvI_y51X72_hEBaSwW8rdg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
