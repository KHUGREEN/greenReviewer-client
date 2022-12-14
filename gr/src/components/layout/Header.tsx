/*
 * Copyright 2022 KHUGREEN (https://github.com/KHUGREEN)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import SearchInput from "./SearchInput";
import logo from "../../assets/img/logo.jpg";
import "../../assets/css/header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-contents">
        <div className="header-logo">
          <img
            src={logo}
            width="130px"
            onClick={() => window.location.assign("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
