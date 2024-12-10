import { expect as chaiExpect } from 'chai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

(global as any).expect = chaiExpect;
