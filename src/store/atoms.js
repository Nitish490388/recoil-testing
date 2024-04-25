import { atom, selector } from "recoil";

export const myNetworkAtom = atom({
  key: "myNetworkAtom",
  default: 104
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 50
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 20
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 10
});

export const meCount = selector({
  key: "me",
  get: ({ get }) => {

    const notificationCount = get(notificationAtom);
    const jobsCount = get(jobAtom);
    const myNetworkCount = get(myNetworkAtom);
    const messegingCount = get(messagingAtom);

    const meCount = notificationCount + jobsCount + myNetworkCount + messegingCount;

    return meCount;
  }
})