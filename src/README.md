# MVC Folder Architecture (Vue)

## Core Layers
- `models/`: Data contracts, entities, repositories, DTOs, mappers, and validators.
- `views/`: UI layer including layouts, pages, and reusable components.
- `controllers/`: Presentation and request flow logic that coordinates models/services and exposes state/actions to views.

## Supporting Layers
- `services/`: Integrations such as API clients, auth handlers, storage, and logging.
- `router/`: Route definitions and navigation guards.
- `store/`: Global state modules/plugins.
- `composables/`: Shared composition functions.
- `utils/`: Generic helpers.
- `config/`: Environment or app config builders.
- `constants/`: App-wide constants.
- `types/`: Shared JSDoc/TS typings.
- `plugins/`: Vue plugin registrations.
- `assets/`: Static files (styles, images, icons, fonts).
