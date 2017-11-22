# Full Stack Challenge

## Set Up

- In both `/client` and `/server` folder, install npm packages

```bash
npm install -g yarn
cd client
yarn install
cd ../server
yarn install
```

- If you haven't already, install *mongodb*

```bash
# Install mongodb
brew update
brew install mongodb
# Create data store (instructions for MacOS)
sudo mkdir -p /data/db
sudo chmod 0755 /data/db
```

- In `/server`, seed the database

```bash
npm run seed
```

- Start up local dev (use 3 terminals or use `concurrently`)

```bash
# In /server
npm start

# In another terminal
mongod

# In another terminal
cd ../client
npm start
```

## Assumptions
- Admin counts as employee as well (Admin and Employees can review one another)
- There is no view for list of performance reviews because they aren't useful without which employee as context
- Cannot be assigned to self (not yet implemented)
- Can't assign reviewer to reviewee multiple times? (back and front end validation; not yet implemented)
- Don't delete user. Instead add flag "deleted" flag as it may need referencing of past reviews

## Missing:
- Solution only partially complete (missing some pages, styling, etc)
- Unit tests
- Good DI system for unit testing
- Styling: OOCSS and/or react-style and/or style library
- Typings: Use Flow (front- and back-end)
- Authentication and Authorization
- Validate a request for user review has been given (unless admin)
- Lots of repeat in Actions. Could be simplified with redux-actions or similar libraries
- Lots of repeat in Sagas. Could be simplified with abstraction
- Form Validation (front end)
- Data validation (back end)
- Loading spinners (local loading spinners)
- Error handling on pages (local or global errors)
- Consider barrelling without risk of circular dependencies
- Add react-router-redux and handle initial calls on page landing
- Environment variables (front- and back-end) and related settings
- Back end build process
