import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./root-layout/root-layout";
import Home from "./pages/home";
import ProfilePatient from "./pages/profile-patient";
import DetailArtikel from "./pages/detail-artikel";
import ReservasiConsultation from "./pages/reservasi-consultation";
import ReservationData from "./pages/reservation-data";
import AddArticle from "./pages/add-article";
import RootLayoutDoctor from "./root-layout/root-layout-doctor";
import { AuthLoader } from "./authLoader";
import Consulation from "./pages/consulation";
import ProfileDoctor from "./pages/profile-doctor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile-patient",
        element: (
          <AuthLoader>
            <ProfilePatient />
          </AuthLoader>
        ),
      },
      {
        path: "/detailarticle/:id",
        element: <DetailArtikel />,
      },
      {
        path: "/reservation",
        element: (
          <AuthLoader>
            <ReservasiConsultation />
          </AuthLoader>
        ),
      },
      {
        path: "/consulation",
        element: (
          <AuthLoader>
            <Consulation />
          </AuthLoader>
        ),
      },
    ],
  },
  {
    path: "/doctor",
    element: <RootLayoutDoctor />,
    children: [
      {
        index: true,
        element: (
          <AuthLoader>
            <ReservationData />
          </AuthLoader>
        ),
      },
      {
        path: "article",
        element: (
          <AuthLoader>
            <AddArticle />
          </AuthLoader>
        ),
      },
      {
        path: "profile-doctor",
        element: (
          <AuthLoader>
            <ProfileDoctor />
          </AuthLoader>
        ),
      }
    ],
  },
]);
