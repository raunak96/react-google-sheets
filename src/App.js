import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Button, Form, Container, Header, Input } from "semantic-ui-react";

const App = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		salary: "",
		hobby: "",
	});
	const { name, age, salary, hobby } = formData;
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.post(process.env.REACT_APP_URI, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			enqueueSnackbar("Successfully added data to google SpreadSheet", {
				variant: "success",
			});
		} catch (error) {
			enqueueSnackbar(
				`Could not add data to google SpreadSheet due to ${error.response.status}`,
				{
					variant: "error",
				}
			);
		} finally {
			setFormData({ name: "", age: "", salary: "", hobby: "" });
		}
	};
	return (
		<Container fluid className="container">
			<Header as="h2" textAlign="center">
				React GoogleSheets
			</Header>
			<Form className="form" onSubmit={handleSubmit}>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your name"
						type="text"
						value={name}
						name="name"
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Age</label>
					<input
						placeholder="Enter your age"
						type="number"
						value={age}
						name="age"
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Salary</label>
					<Input
						label={{ basic: true, content: "₹" }}
						labelPosition="left"
						placeholder="Enter your salary"
						type="number"
						step="10000"
						value={salary}
						name="salary"
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your hobby"
						type="text"
						value={hobby}
						name="hobby"
						onChange={handleChange}
					/>
				</Form.Field>

				<Button color="blue" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default App;
