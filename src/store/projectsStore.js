import { nanoid } from "nanoid";
import { create } from "zustand";

const projects = [
  {
    id: nanoid(),
    name: "Pariba Cafe",
    loc: "Bestekar Sokak",
    images: [
      "/assets/projects/Bestekar Sokak - Pariba Cafe/cam03 (1).jpg",
      "/assets/projects/Bestekar Sokak - Pariba Cafe/cam04.jpg",
      "/assets/projects/Bestekar Sokak - Pariba Cafe/cam05 (1).jpg",
      "/assets/projects/Bestekar Sokak - Pariba Cafe/cam08 (1).jpg",
    ],
  },
  {
    id: nanoid(),
    name: "Altınel Evi",
    loc: "Edit Lake Villaları",
    images: [
      "/assets/projects/Edit Lake Villaları - Altınel Evi/Emir Oda/ODA_2 (1).PNG",
      "/assets/projects/Edit Lake Villaları - Altınel Evi/Kaan Oda/ODA_1 (1).PNG",
      "/assets/projects/Edit Lake Villaları - Altınel Evi/Çatı Katı/RENDER-1 (1).png",
    ],
  },
  {
    id: nanoid(),
    name: "Luxo Diamond",
    loc: "Panora AVM",
    images: [
      "/assets/projects/Panora AVM - Luxo Diamond/DSCF9456.jpg",
      "/assets/projects/Panora AVM - Luxo Diamond/DSCF9458.jpg",
      "/assets/projects/Panora AVM - Luxo Diamond/DSCF9459.jpg",
    ],
  },
  {
    id: nanoid(),
    name: "Murt Evi",
    loc: "Park Joven",
    images: [
      "/assets/projects/Park Joven - Murt Evi/1 (1).png",
      "/assets/projects/Park Joven - Murt Evi/1 (10).png",
      "/assets/projects/Park Joven - Murt Evi/1 (11).png",
    ],
  },
  {
    id: nanoid(),
    name: "La Pace Gym",
    loc: "Park Oran Ofis",
    images: [
      "/assets/projects/Park Oran Ofis - La Pace Gym/1 (1).png",
      "/assets/projects/Park Oran Ofis - La Pace Gym/1 (2).png",
      "/assets/projects/Park Oran Ofis - La Pace Gym/1 (3).png",
    ],
  },
  {
    id: nanoid(),
    name: "Cephe ve Peyzaj Tasarımı",
    loc: "Sante Prime",
    images: [
      "/assets/projects/Sante Prime - Cephe ve Peyzaj Tasarımı - Kurumsal Kimlik Tasarımı/1 (1).png",
      "/assets/projects/Sante Prime - Cephe ve Peyzaj Tasarımı - Kurumsal Kimlik Tasarımı/1 (2).png",
      "/assets/projects/Sante Prime - Cephe ve Peyzaj Tasarımı - Kurumsal Kimlik Tasarımı/1 (3).png",
    ],
  },
  {
    id: nanoid(),
    name: "Kaff Diamond",
    loc: "Yalıkavak Marina",
    images: [
      "/assets/projects/Yalıkavak Marina - Kaff Diamond/1.jpg",
      "/assets/projects/Yalıkavak Marina - Kaff Diamond/2.jpg",
      "/assets/projects/Yalıkavak Marina - Kaff Diamond/3",
    ],
  },
  {
    id: nanoid(),
    name: "Luxo Diamond",
    loc: "Yalıkavak Marina",
    images: [
      "/assets/projects/Yalıkavak Marina - Luxo Diamond/1 (1).jpeg",
      "/assets/projects/Yalıkavak Marina - Luxo Diamond/1 (10).jpeg",
      "/assets/projects/Yalıkavak Marina - Luxo Diamond/1 (11).jpeg",
    ],
  },
];

const useStore = create((set) => ({
  projects: projects,
  selectedProject: projects[0],
  handleProjectClick: (project) =>
    set((state) => ({ selectedProject: project })),
}));

export { useStore };
