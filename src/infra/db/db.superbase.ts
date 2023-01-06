import { iDataBase, SERVICE } from './db.interface';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import 'dotenv/config';

export class Superbase implements iDataBase {
  private supabase: SupabaseClient;
  private static instance: Superbase;

  private constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_KEY as string
    );
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }

  async getAllUser(service: SERVICE) {
    const allUser = await this.supabase
      .from('newsletter')
      .select('*')
      .eq('service', service);

    return allUser.data;
  }

  async addUser(name: string, email: string, service: SERVICE) {
    const result = await this.supabase.from('newsletter').insert([
      {
        service: service,
        user: { name, email },
      },
    ]);
    return result;
  }
}
