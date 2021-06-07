export class CreateUserDto {
    readonly firstname: string;
    readonly lastname: string;
    readonly username: string;
    readonly password: string;
    readonly isAdmin: boolean;
}
