import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('/singup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {

        //console.log(authCredentialsDto);
        return this.authService.signUp(authCredentialsDto);

    }

    @Post('/singin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {

        //console.log(authCredentialsDto);
        return this.authService.signIn(authCredentialsDto);

    }
}
