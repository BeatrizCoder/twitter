import { Injectable, NotFoundExcpetion } from '@nestjs/common';
import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findUnique(username: String): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { username:DataTransfer.username },
    });

  }
  const hashedPassword= await bcrypt.hash(data.password, 10);
  data{
    ...data
  }
}
