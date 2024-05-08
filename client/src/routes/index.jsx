import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "src/layout"
import Home from "./Home"
import NoPage from "./NoPage"
import Data from "./Data"
import Form from "./Form"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Data />} path="/data" exact />
          <Route element={<Form />} path="/form" exact />
          <Route element={<NoPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}