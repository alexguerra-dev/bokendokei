# Bōkendokei

- [Scratchpad](/doc/scratchpad.md)
- [Look And Feel](/doc/look.md)

## 1. **App Purpose & Vision**

Habits are hard to form. Let this make starting fun.

In this app there are _Pals_ and they are low resolution sprite image things that have some kind of idle animation.

They are associated with a _Adventurer_. Users are _Adventurers_.

_Adventurers_ are part of a _Party_. In the case of testing the app the party will be my family.

- Alex
- Teresa
- River
- Finn

Each Adventurer should be able to log into there own page and update things.

---

## MVP Features (Core)

_As a registered user, I want to log in with email so I can access my saved data._
As an _Adventurer_, I want to be able to log into my Settings page and change to color of my _Pal_.
As an _Adventurer_, I want to be able to log into my _Adventure Journal_ to change what my _Pal_ feels like.

As an _Adventurer_, I want to log in with my personal 4 digit code so I can log a _Challenge_ and receive some Gold.

As a user, I want to enter my 4 digit code quickly by having focus jump from one text box to another as digits are entered.

I know the above is basically ZERO security. I will think about making a proper login system sometime later.

## Future Features (Nice-to-Have)

- Login System
  - Think about using something that let's me use Google as a login method.
- Export an image or sms sticker of a _Pet_
- When you rest so does your _pal_ (maybe, it is by the clock)

## UI / UX Notes

- The _Pets_ should be cute, almost chibi style. Elements should be rounded and soft.

- Entering a new mood for a _Pet_ should be very fast. It is adding a log to the _Adventure Journal_
  1. _Adventurer_ taps there image
  2. _Adventurer_ enters 4 digit code
  3. There should be two big buttons
     1. `Pet's Mood`
     2. `Log a Challenge`
  4. Selecting `Pet's Mood` will give 10 large buttons labeled with different moods.
  5. Selecting a _Mood_ will change the _Pets_ visual appearance and animation.
  6. Directly after mood is selected a color picker will be shown and the Pet's background can be changed.

## Technical Stack Decisions

- Frontend: React + Next.js + Tailwind
- Backend: Supabase (Auth, Database, maybe Storage)

## Data Model

I am not that great with data models. Here I try...

- `Adventurer`

  - `id`
  - `Passcode`
  - `BackgroundColor`
  - `Name`
  - `BattleCry`
  - `Gold`
  - `Pal`

- `Pal`
  - `id`
  - `Name`
  - `Adventurer`
  - `Mood`
  - `Gear`

## Open Questions
