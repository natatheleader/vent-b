import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const bob = await prisma.user.upsert({
        where: { email: 'bob@gmail.com' },
        update: {},
        create: {
            email: 'bob@gmail.com',
            username: 'bob',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob',
                    last_name: 'bob',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const bob2 = await prisma.user.upsert({
        where: { email: 'bob2@gmail.com' },
        update: {},
        create: {
            email: 'bob2@gmail.com',
            username: 'bob2',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob2',
                    last_name: 'bob2',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const bob3 = await prisma.user.upsert({
        where: { email: 'bob3@gmail.com' },
        update: {},
        create: {
            email: 'bob3@gmail.com',
            username: 'bob3',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob3',
                    last_name: 'bob3',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const bob4 = await prisma.user.upsert({
        where: { email: 'bob4@gmail.com' },
        update: {},
        create: {
            email: 'bob4@gmail.com',
            username: 'bob4',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob4',
                    last_name: 'bob4',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const bob5 = await prisma.user.upsert({
        where: { email: 'bob5@gmail.com' },
        update: {},
        create: {
            email: 'bob5@gmail.com',
            username: 'bob5',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob5',
                    last_name: 'bob5',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const bob6 = await prisma.user.upsert({
        where: { email: 'bob6@gmail.com' },
        update: {},
        create: {
            email: 'bob6@gmail.com',
            username: 'bob6',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'bob6',
                    last_name: 'bob6',
                    sex: "Male",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })

    const alice = await prisma.user.upsert({
        where: { email: 'alice@gmail.com' },
        update: {},
        create: {
            email: 'alice@gmail.com',
            username: 'alice',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice',
                    last_name: 'alice',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const alice2 = await prisma.user.upsert({
        where: { email: 'alice2@gmail.com' },
        update: {},
        create: {
            email: 'alice2@gmail.com',
            username: 'alice2',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice2',
                    last_name: 'alice2',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const alice3 = await prisma.user.upsert({
        where: { email: 'alice3@gmail.com' },
        update: {},
        create: {
            email: 'alice3@gmail.com',
            username: 'alice3',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice3',
                    last_name: 'alice3',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const alice4 = await prisma.user.upsert({
        where: { email: 'alice4@gmail.com' },
        update: {},
        create: {
            email: 'alice4@gmail.com',
            username: 'alice4',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice4',
                    last_name: 'alice4',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const alice5 = await prisma.user.upsert({
        where: { email: 'alice5@gmail.com' },
        update: {},
        create: {
            email: 'alice5@gmail.com',
            username: 'alice5',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice5',
                    last_name: 'alice5',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    const alice6 = await prisma.user.upsert({
        where: { email: 'alice6@gmail.com' },
        update: {},
        create: {
            email: 'alice6@gmail.com',
            username: 'alice6',
            password: '$argon2id$v=19$m=65536,t=3,p=4$3fEkaZGJgDj+GKsJrlrhMA$x07fysndT0h6si4cZsTKNlYR42rgLNZMWj6es4IMoh0',
            // phone: '',
            provider: 'local',
            is_verified: true,
            is_active: true,
            profile: {
                create: {
                    profile_image: 'null',
                    first_name: 'alice6',
                    last_name: 'alice6',
                    sex: "Female",
                    date_of_birth: "10/10/10",
                    bio: "",
                },
            },
        },
    })
    // console.log({ nata})//, bob })
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})