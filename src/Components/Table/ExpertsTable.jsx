import { useEffect, useState } from "react";
import {
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { AddCategory } from "../dialogues/AddCategory";
import { GetCategorylist } from "../../services/services";
import { EditCategory } from "../dialogues/EditCategory";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Users",
        value: "users",
    },
    {
        label: "Experts",
        value: "experts",
    },
];

const TABLE_HEAD = ["Image", "Name", "Description", "Is_listed", "View", "Delete"];


export function ExpertsTable() {
    const [TABLE_ROWS, setTABLE_ROWS] = useState([])
    const [showEditModal, setShowEditModal] = useState(false);
    const [showtabledata, setShowtabldata] = useState({ id: '', cat_image: '', cat_name: '', cat_description: '', is_listed: '' })
    const handleOpen = () => setShowEditModal(!showEditModal);
    function afterEdit() {
        getCategorylistFunc();
        setShowtabldata({ id: '', cat_image: '', cat_name: '', cat_description: '', is_listed: '' })
    }
    const getCategorylistFunc = async () => {
        try {
            const res = await GetCategorylist();
            setTABLE_ROWS(res.data);
        } catch (error) {
            console.log('Error fetching category list:', error);
        }
    };
    useEffect(() => {
        getCategorylistFunc()

    }, [])
    return (
        <Card className="h-full w-full border">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h4" color="blue-gray" className="text-indigo-900 font-serif">
                            CATEGORY LIST
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all category.
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

                        <AddCategory getCategorylistFunc={getCategorylistFunc} />

                    </div>
                </div>

            </CardHeader>
            <CardBody className="overflow-scroll h-[calc(100vh-22rem)] px-0 -mt-7">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ id, cat_image, cat_name, cat_description, is_listed }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={cat_name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={cat_image} alt={cat_name} size="sm" />

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {cat_name}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {cat_description.split(' ').slice(0, 20).join(' ')}...
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={is_listed == true ? "listed" : "not listed"}
                                                    color={is_listed == true ? "green" : "red"}
                                                />
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                            </svg>


                                        </td>
                                        <td className={classes} >
                                            <IconButton variant="text">
                                                <PencilIcon
                                                    className="h-4 w-4"
                                                    onClick={() => {
                                                        handleOpen(); // Open the modal
                                                        setShowtabldata({
                                                            id: id,
                                                            cat_image: cat_image,
                                                            cat_name: cat_name,
                                                            cat_description: cat_description,
                                                            is_listed: is_listed
                                                        });
                                                    }}
                                                />
                                            </IconButton>
                                            <IconButton variant="text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-400">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                </svg>

                                            </IconButton>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
            {showEditModal && (
                <EditCategory
                    // data={/* pass data to the modal */}
                    open={showEditModal}
                    showtabledata={showtabledata}
                    handleOpen={handleOpen}
                    afterEdit={afterEdit}
                />
            )}
        </Card>
    );
}