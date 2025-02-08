function DatePicker() {
  return (
    <div className="w-fit p-6 border border-gray-300">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center w-full gap-8 border border-gray-300 p-0.5 text-xs font-medium text-navy">
          <button className="text-navy p-2 transition-all duration-500 hover:bg-blush hover:text-navy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99978L10.0025 3.99725"
                stroke="currentcolor"
                strokeWidth="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          January
          <button className="text-navy p-2 transition-all duration-500 hover:bg-blush hover:text-navy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.00236 3.99707L10.0025 7.99723L6 11.9998"
                stroke="currentcolor"
                strokeWidth="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 border border-gray-300 text-xs font-medium text-navy transition-all duration-500 hover:text-navy hover:bg-blush">
          2023
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12 5.99973L7.99984 9.9999L3.99731 5.99738"
              stroke="currentcolor"
              strokeWidth="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <table className="pb-3 border-b border-gray-300 w-max mx-auto">
        <thead className="mb-2">
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Mo
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Tu
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                We
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Th
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Fr
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Sa
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                Su
              </p>
            </td>
          </tr>
        </thead>
        <tbody className="">
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                26
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                27
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                28
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                29
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                30
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                31
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                1
              </p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                2
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                3
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                4
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                5
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                6
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                7
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                8
              </p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                9
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                10
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                11
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                12
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-white bg-mauve flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                13
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                14
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                15
              </p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                16
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                17
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 bg-blush">
              <p className="text-sm font-medium text-white bg-mauve flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                18
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                19
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                20
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                21
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                22
              </p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                23
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                24
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                25
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                26
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                27
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                28
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                29
              </p>
            </td>
          </tr>
          <tr className="flex pb-3">
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                30
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-navy flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                31
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                1
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                2
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                3
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                4
              </p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p className="text-sm font-medium text-gray-300 flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-blush hover:text-navy">
                5
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center py-3 gap-3 border-b border-gray-300">
        <select
          id="hour"
          className="h-auto border border-gray-300 text-gray-600 text-base block w-14 py-1.5 px-2 focus:outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option selected>6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span className="text-xl font-semibold text-navy">:</span>
        <select
          id="minute"
          className="h-auto border border-gray-300 text-gray-600 text-base block w-14 py-1.5 px-2 focus:outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option selected>15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
        </select>
        <select
          id="zone"
          className="h-auto border border-gray-300 text-gray-600 text-base block w-16 py-1.5 px-2 focus:outline-none"
        >
          <option selected>AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default DatePicker;
