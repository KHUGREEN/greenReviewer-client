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

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface IData {
  id: string;
  name: string;
}

//api get 커스텀 훅
export const useFetch = (url: string) => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response: AxiosResponse<IData[]> = await axios.get(
        `${process.env.REACT_APP_SERVER_HOST}/${url}`
      );
      setData(response.data);
    };
    fetchApi();
  }, []);

  return data;
};
