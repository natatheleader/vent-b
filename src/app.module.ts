import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { PreauthMiddleware } from './auth/middleware/preauth.middleware';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { SentmentModule } from './sentment/sentment.module';
import { CommentReplayModule } from './comment-replay/comment-replay.module';
import { LikeModule } from './like/like.module';
import { ReportModule } from './report/report.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SoftDeleteMiddleware } from './prisma/soft-delete.middleware';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }), 
        AuthModule, 
        UserModule, 
        PrismaModule, 
        MailModule, 
        ProfileModule, CommentModule, PostModule, SentmentModule, CommentReplayModule, LikeModule, ReportModule,
    ],
    providers: [
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: SoftDeleteMiddleware,
        // },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(PreauthMiddleware).forRoutes({
            path: '/auth/firebase', method: RequestMethod.GET,
        });
    }
}
