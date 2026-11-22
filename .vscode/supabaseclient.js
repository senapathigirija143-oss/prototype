import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://dmmhuvmpwswrhwoudzio.supabase.co;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbWh1dm1wd3N3cmh3b3VkemlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxOTk5OTgsImV4cCI6MjEwODc3NTk5OH0.LgkairrFXKPXEjwx08vpkJK9AZT2jKuZtgphki1aLGc;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
