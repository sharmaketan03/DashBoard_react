import React from "react";

const ContactsComponent = () => {
  return (
    <div className="mt-[10%] w-[97%]">
      <h1 className="text-2xl font-bold mb-8">Contacts</h1>
      <div className=" bg-white w-[100%]  border border-gray-300 rounded-xl shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-sky-100 text-[#254a9c]">
                <th className="px-4 py-3  font-semibold rounded-l-[7px]">Name</th>
                <th className="px-4 py-3  font-semibold">Client</th>
                <th className="px-4 py-3  font-semibold">Position</th>
                <th className="px-4 py-3  font-semibold">Site</th>
                <th className="px-4 py-3  font-semibold">email</th>
                <th className="px-4 py-3  font-semibold rounded-r-[7px]">Phone</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4  py-3">Abhishek Jain</td>
                <td className="px-4  py-3"></td>
                <td className="px-4  py-3">Senior Developer</td>
                <td className="px-4  py-3">Cox</td>
                <td className="px-4  py-3">abhishek@sterlinginfotech.com</td>
                <td className="px-4  py-3">9468590655</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4  py-3">Abhishek Jain</td>
                <td className="px-4  py-3">Sterling Infotech</td>
                <td className="px-4  py-3">Senior Developer</td>
                <td className="px-4  py-3">Client Site</td>
                <td className="px-4  py-3">user1@sterlinginfotech.com</td>
                <td className="px-4  py-3">123244444</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4  py-3">Edit Contact</td>
                <td className="px-4  py-3">Sterling Infotech</td>
                <td className="px-4  py-3">Senior Developer</td>
                <td className="px-4  py-3">sterling</td>
                <td className="px-4  py-3">edit@test.com</td>
                <td className="px-4  py-3">55588888</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4  py-3">Edit New Last</td>
                <td className="px-4  py-3">Sterling Infotech</td>
                <td className="px-4  py-3">Developer</td>
                <td className="px-4  py-3">sterling</td>
                <td className="px-4  py-3 ">anshu_77777@yahoo.co.in</td>
                <td className="px-4  py-3">123244444</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4  py-3">New Requester</td>
                <td className="px-4  py-3">Sterling Infotech</td>
                <td className="px-4  py-3">Emp</td>
                <td className="px-4  py-3">sterling</td>
                <td className="px-4  py-3">new@te.com</td>
                <td className="px-4  py-3">46544</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4 py-3">Paul cox</td>
                <td className="px-4 py-3">Sterling Infotech</td>
                <td className="px-4 py-3">Senior Developer</td>
                <td className="px-4 py-3">Client Site</td>
                <td className="px-4 py-3">anshu@sterlinginfotech.com</td>
                <td className="px-4 py-3">4683842798</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4 py-3">Paul cox</td>
                <td className="px-4 py-3">Sterling Infotech</td>
                <td className="px-4 py-3">Developer</td>
                <td className="px-4 py-3 text-green-500">General Contact</td>
                <td className="px-4 py-3 ">anshu_77777@yahoo.co.in</td>
                <td className="px-4 py-3">55588888</td>
              </tr>

              <tr className="border-t border-gray-300 hover:bg-gray-200">
                <td className="px-4 py-3">Shankey Jn Jain</td>
                <td className="px-4 py-3">Sterling Infotech</td>
                <td className="px-4 py-3">Developer</td>
                <td className="px-4 py-3 text-green-500">General Contact</td>
                <td className="px-4 py-3">shankey@sterlinginfotech.com</td>
                <td className="px-4 py-3">55588888</td>
              </tr>

              <tr className="border-t border-gray-300 border-b hover:bg-gray-200">
                <td className="px-4 py-3">Stuart Cox</td>
                <td className="px-4 py-3">Sterling Infotech</td>
                <td className="px-4 py-3">CEO</td>
                <td className="px-4 py-3">Client Site</td>
                <td className="px-4 py-3">stuart@test.com</td>
                <td className="px-4 py-3">7897897897</td>
              </tr>
            </tbody>
          </table>

          <div className=" text-xs text-right  p-[20px] text-gray-500 mt-3">
            <span className="text-gray-400 border p-1 ">
              &lt; Prev <span className="mx-2  text-gray-300 border-r"></span> Next &gt;
            </span>
            <div className="text-black mt-4 ">
              Page 1 of 1, showing 9 record(s) out of 9 total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
