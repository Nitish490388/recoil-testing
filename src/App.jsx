import { useRecoilValue, RecoilRoot, selector } from "recoil";
import { jobAtom, messagingAtom, myNetworkAtom, notificationAtom, meCount } from "./store/atoms";

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

export default App

function MainApp() {
  const myNetwork = useRecoilValue(myNetworkAtom);
  const jobs = useRecoilValue(jobAtom);
  const messeging = useRecoilValue(messagingAtom);
  const notification = useRecoilValue(notificationAtom);
  const prof = useRecoilValue(meCount);

  return (
    <>
      <button>Home</button>
      <button>My networks ({myNetwork >= 100 ? "99+" : myNetwork})</button>
      <button>Jobs({jobs >= 100 ? "99+" : jobs})</button>
      <button>Notifications({notification >= 100 ? "99+" : notification})</button>
      <button>masseging({messeging >= 100 ? "99+" : messeging})</button>
      <button>Me({prof})</button>
    </>
  );
}
