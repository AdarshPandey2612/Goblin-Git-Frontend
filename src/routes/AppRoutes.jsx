import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../layouts/AdminLayout";
import DriverLayout from "../layouts/DriverLayout";
import ParentLayout from "../layouts/ParentLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Buses from "../pages/admin/Buses";
import BusDetails from "../pages/admin/BusDetails";
import RoutesPage from "../pages/admin/Routes";
import RouteDetails from "../pages/admin/RouteDetails";
import Alerts from "../pages/admin/Alerts";
import AlertDetails from "../pages/admin/AlertDetails";

import DriverDashboard from "../pages/driver/DriverDashboard";
import DriverBus from "../pages/driver/DriverBus";
import DriverRoute from "../pages/driver/DriverRoute";
import DriverTrip from "../pages/driver/DriverTrip";
import DriverBoarding from "../pages/driver/DriverBoarding";
import DriverEmergency from "../pages/driver/DriverEmergency";

import ParentDashboard from "../pages/parent/ParentDashboard";
import ParentChild from "../pages/parent/ParentChild";
import ParentLive from "../pages/parent/ParentLive";
import ParentRoute from "../pages/parent/ParentRoute";
import ParentAlerts from "../pages/parent/ParentAlerts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/buses"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <Buses />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/buses/:id"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <BusDetails />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/routes"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <RoutesPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/routes/:id"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <RouteDetails />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/alerts"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <Alerts />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/alerts/:id"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout>
                <AlertDetails />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= DRIVER ================= */}

        <Route
          path="/driver"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverDashboard />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/bus"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverBus />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/route"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverRoute />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/trip"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverTrip />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/boarding"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverBoarding />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/emergency"
          element={
            <ProtectedRoute allowedRole="driver">
              <DriverLayout>
                <DriverEmergency />
              </DriverLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= PARENT ================= */}

        <Route
          path="/parent"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentLayout>
                <ParentDashboard />
              </ParentLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/child"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentLayout>
                <ParentChild />
              </ParentLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/live"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentLayout>
                <ParentLive />
              </ParentLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/route"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentLayout>
                <ParentRoute />
              </ParentLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/alerts"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentLayout>
                <ParentAlerts />
              </ParentLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}

        <Route
          path="*"
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;