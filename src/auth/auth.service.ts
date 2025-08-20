import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // TODO: Replace with actual user validation against your database
    console.log(username);
    console.log(password);
    console.log(this.configService);
    console.log(
      "Raw process.env:",
      process.env.APP_USERNAME,
      process.env.APP_PASSWORD,
    );

    // console.log(this.configService.get('APP_USERNAME'));
    // console.log(this.configService.get('APP_PASSWORD'));
    if (
      username === this.configService.get<string>("APP_USERNAME") &&
      password === this.configService.get<string>("APP_PASSWORD")
    ) {
      return { userId: 1, username: username };
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
