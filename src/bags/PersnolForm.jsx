export default function PersnolForm({ name, setName, email, setEmail, phoneNumber, setPhoneNumber }){
    const handleNameChange = (e) => {
        setName(e.target.value);
        
        };
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };
        
        const handlePhoneNumberChange = (e) => {
            setPhoneNumber(e.target.value);
        };
    return(
        <form>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. Esam "
                    value={name}
                    onChange={handleNameChange}
                    required
                />

            </div>
            <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. esam@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
                />
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Phone Number</label>
                <input
                type="text"
                name="Phone"
                id="Phone"
                placeholder="e.g. +967 778 254 215"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                />
            </div>
        </form>
    )
}