import { Injectable, NestMiddleware } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SoftDeleteMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
      throw new Error('Method not implemented.');
    }
    private prisma = new PrismaClient();
   
    async intercept(context: any, next: () => Promise<any>) {
        const { action, model, data } = context.params;
    
        if ((action === 'delete' || action === 'deleteMany') && model === 'Post') {
            context.params.action = action === 'delete' ? 'update' : 'updateMany';
            context.params.data = { ...data, is_deleted: true };
        }
    
        return next();
    }
}
