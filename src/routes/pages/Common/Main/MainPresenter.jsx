import React from "react";
import { useState } from "react";

import Layout from "../../../../components/Layout/Layout";
import { ShowSpot } from "./components/ShowSpot";
import { ProgramList } from "./components/Program";

import './Main.css';

const MainPresenter = ({
    programs
}) => {

    return (
        <Layout>
            <ShowSpot />
            <div className="content">
                <ProgramList
                    programs={programs}
                />
            </div>
        </Layout>
    )
}

export default MainPresenter;