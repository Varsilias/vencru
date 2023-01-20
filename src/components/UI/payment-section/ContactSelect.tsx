const ContactSelect = () => {
  return (
    <div className="w-fulls">
      <form>
        <div className="mb-4">
          <input
            type="radio"
            id="account_email"
            name="account_email"
            value="account_email"
          />
          <label
            htmlFor="account_email"
            className="pl-2 font-medium text-[#344054]"
          >
            Send to my account email
            <p className="pl-[27px] md:pl-[27px] text-[#667085] text-sm">
              olivia@untitledui.com
            </p>
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="alternative"
            name="account_email"
            value="alternative"
            readOnly={true}
            checked={true}
          />
          <label
            htmlFor="alternative_email"
            className="pl-2 font-medium text-[#344054]"
          >
            Send to an alternative email
            <div className="selected_email_container p-2 whitespace-nowrap border-[1px] rounded border-solid border-[#d0d5dd] bg-white ml-[27px] md:ml-[27px] text-[#667085] text-sm md:w-[100%] md:mt-2">
              billing@untitledui.com
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactSelect;
