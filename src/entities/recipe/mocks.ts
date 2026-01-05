import type {Recipe} from "./types.ts";
import csImage from '../../assets/image/cs.svg';
export const recipeMock: Recipe[] = [
    {
        id: '1',
        title: 'Pasta Carbonara',
        description: 'Classic Italian pasta with crispy bacon, egg and Parmesan cheese.',
        image: csImage,
        cookTime: 20,
        serving: 2,
    },
    {
        id: '2',
        title: 'Chicken Noodle Soup',
        description: 'Light chicken broth with homemade noodles and fresh vegetables.',
        image: csImage,
        cookTime: 40,
        serving: 4,
    },
    {
        id: '3',
        title: 'Caesar Salad',
        description: 'Crispy salad with chicken, croutons and creamy Caesar dressing.',
        image: csImage,
        cookTime: 15,
        serving: 2,
    },
];