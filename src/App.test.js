import React from 'react';
import {cleanup, render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux"
import store from "./redux/store"
import LogoHeader from "./components/header/Toolbar";

describe("test App component", ()=>{
  beforeEach(cleanup)

  afterEach(()=>{
    jest.resetAllMocks()
  })
  it("App component renders correctly", async ()=>{
    const {container} = render(
        <Provider store={store}>
          <App />
        </Provider>
        )
console.log(container)
    const topSlogan = await screen.getByText(/Vibes & Designs/i)
    expect(screen.getByText("Vibes & Designs")).toBeInTheDocument()
    
    expect(topSlogan).toBeDefined()
    //expect(screen.getByRole("")).toBeInTheDocument()
  })
  
  //it("Sinag logo functionality", ()=>{
  //  render(
  //  <LogoHeader/>
  //  )
  //})
})
