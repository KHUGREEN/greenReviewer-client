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

import Description from "./Description";
import Statistics from "./statistics";

const Main = (props: { reviewUpdate: number }) => {
  return (
    <div className="statistics-main">
      <div className="font-30 font-bold">Type</div>
      <div
        className="flex-row"
        style={{ justifyContent: "space-between", height: "549px" }}
      >
        <Description />
        <Statistics reviewUpdate={props.reviewUpdate} />
      </div>
    </div>
  );
};

export default Main;
