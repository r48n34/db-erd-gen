# db-erd-gen
<a href="https://github.com/r48n34/db-erd-gen"><img src="https://img.shields.io/github/actions/workflow/status/r48n34/db-erd-gen/test.yml" /></a>

Free DrawSQL like website but free forever  

![https://db-erd-gen.vercel.app/](/assert/banners.jpg)

URL: https://db-erd-gen.vercel.app/

## Features  
1. Free forever and open sources. 
2. Save SQL in various DB format.   
3. Easy to use / store GUI website.  
4. Low learning curve UI.    

## Current supported output  
- Postgres raw  
- MySQL / MariaDB raw 
- SQLite raw
- knex.js  
- kysely ts types
- kysely Postgres
- kysely sqlite
- Typescript types
- Zod scheme types
- Prisma Postgres
- Prisma MySQL
- mikro-orm (Todo)
- Mongoose Scheme (TBC)

## Roadmap
- ✅ With Zod type checking
- ✅ Update Maininte to v7
- ⬜️ i18n adapts
- ⬜️ mikro-orm & Mongoose Scheme adapts

## Todo
- ✅ Support kysely db migrate types output  
- ✅ Support kysely ts types output  
- ✅ Support SQLite types output  
- ✅ Support MySQL / MariaDB types output  
- ✅ Support typescript normal types
- ✅ Support zod types generate
- ✅ Support Tables CRUD code for several frameworks
- ⬜️ Add enums options and input for enums
- ⬜️ Support defaultTo string in general
- ⬜️ Support defaultTo string in kysely
- ✅ Support Prisma types output  
- ✅ Add UNIQUE types  
- ✅ Support sqlite types output    
- ⬜️ More features  
- ✅ Update UI  
- ⬜️ Testing vitest  

## Self hosting
```bash
# Install with yarn
yarn

# Start with dev
yarn dev

# Build to production
yarn build
```

## License
Distributed under the `MIT License`.