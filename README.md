# 🧪 Vite React Event Dashboard

This is a take-home assignment showcasing core React skills under time constraints. The partial implementation demonstrates:

Architectural decisions

Technical proficiency

Intentional prioritization of key concepts

While not feature-complete, it highlights the ability to:
✓ Setup modern tooling (Vite, TypeScript, Tailwind)
✓ Implement routing foundations
✓ Structure scalable API integration

## ⚙️ Setup Instructions

```bash
git clone https://github.com/AdilasFrontend/adilas-frontend-assessment-react-ay.git
cd adilas-frontend-assessment-react-ay
npm install
npm run dev          # Start the frontend development server
npm run serve:api    # (Optional) Start mock API server using json-server on port 3001

```
## 💡 Notes

- React Router is used but have issue - fix
- Tailwind is set up, but untested
- API endpoint `/api/events` will 404 unless you run `json-server` or MSW
- CreateEvent and EventDetail need to be implemented
- Form validation, error states, filtering, stats panel: not implemented

## ✅ Task Completion Statu

- [ ] plemented basic routing (React Router v6
- [ ] TypeScript: Core type safety implemented (Event types, API responses)
- [ ] Setup working API with json-server (http://localhost:3001/api/events)
- [ ] TailwindCSS fully configured and working
- [ ] dd form and validation to create event (50% - form UI done)
- [ ] Implement event details page (30% - basic layout)
- [ ] Add filtering/persist to URL, statistics, loading states
- [ ] Write at least 2 meaningful tests (not started)

##
## 🔧 Partially Completed Details

**Form & Validation**  
✓ Form UI created  
✗ Validation logic missing  
✗ Submission handling incomplete  

**Event Details Page**  
✓ Route configured  
✓ Basic layout scaffolded  
✗ Dynamic data loading not implemented  

## 🚀 Next Steps
1. Complete form validation with react-hook-form
2. Connect EventDetail page to API
3. Implement useSearchParams for filters
4. Add Vitest unit tests