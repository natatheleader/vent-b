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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "capricorn",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "sagittarius",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "aquarius",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "pisces",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "aries",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "taurus",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "gemini",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "cancer",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "leo",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "virgo",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "libra",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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
                    country: "Ethiopia",
                    city: "Addis Ababa",
                    bio: "",
                    astro_sign: "scorpio",
                    advancedProfile: {
                        create: {
                            unit: "kg/m",
                            height: 165,
                            weight: 60,
                            fav_food: "shiro",
                            fav_color: "blue",
                            skin_color: "Fair",
                            eye_color: "Black",
                            hair_color: "Black",
                            hair_length: "Long",
                            religion: "Orthodox",
                            marital_status: "Single",
                            children: "None",
                            workout: "Yes",
                            physique: "Athletic",
                            drinking: "Occessionally",
                            smoke: "Occessionally",
                            pet: "Dog",
                            interested_in: "Relationship",
                            hobby: "running",
                            interest: "dating"
                        }
                    },
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