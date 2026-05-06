'use client';

import React, { useState } from 'react';
import CourseCard from '../components/course-card';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

const coursesData = [
  {
    id: '1',
    title: 'Basic Literacy & Numeracy',
    description: 'Simple, friendly lessons for children to learn reading, writing and basic numbers using stories and local examples.',
    thumbnail: 'https://www.shutterstock.com/image-vector/maths-doodle-line-set-school-260nw-2518563339.jpg',
    duration: '5 hours',
    videos: 8,
    students: 320,
    level: 'Beginner',
    category: 'Foundational',
    videoIds: ['jrZ5NUt3kFA']
  },
  {
    id: '2',
    title: 'Practical Agriculture Basics',
    description: 'Hands-on, easy-to-follow lessons introducing farming techniques, seed saving, and small kitchen gardens suitable for village life.',
    thumbnail: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS_BLOGS/85919d58-156d-4518-b37e-ecc4927ac304.jpg',
    duration: '6 hours',
    videos: 10,
    students: 460,
    level: 'Beginner',
    category: 'Agriculture',
    videoIds: ['PolcZfURSuE']
  },
  {
    id: '3',
    title: 'Health & Hygiene for Kids',
    description: 'Short animated lessons on handwashing, clean water, nutrition and simple first-aid tailored for rural families.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGeuhAiKM1_xeuxDfiItNaHONnW29r3YlCw&s',
    duration: '3 hours',
    videos: 6,
    students: 520,
    level: 'Beginner',
    category: 'Health',
    videoIds: ['9bZkp7q19f0']
  },
  {
    id: '4',
    title: 'Science Around Us',
    description: 'Explore simple science using everyday rural examples — water cycle, seeds, soil and weather.',
    thumbnail: 'https://d32dbz94xv1iru.cloudfront.net/resize/1/images/events/by_uuid/4f/4f6b65a8-a84f-4f4b-99af-c49679c82141-1501x900.jpg?width=640',
    duration: '4 hours',
    videos: 7,
    students: 280,
    level: 'Beginner',
    category: 'Science',
    videoIds: ['dQw4w9WgXcQ']
  },
  {
    id: '5',
    title: 'Small Business & Crafts',
    description: 'Practical lessons on making and selling simple crafts, saving money, and starting a tiny household business.',
    thumbnail: 'https://media.collegedekho.com/media/img/news/12th_best_courses_1.png?height=253&width=380',
    duration: '4 hours',
    videos: 9,
    students: 190,
    level: 'Beginner',
    category: 'Skills',
    videoIds: ['jNQXAC9IVRw']
  },
  {
    id: '6',
    title: 'Solar & Simple Technology',
    description: 'Introduce basic, low-cost technologies like solar lights, radios and phone charging that help villages learn and connect.',
    thumbnail: 'https://media.collegedekho.com/media/img/news/12th_best_courses_1.png?height=253&width=380',
    duration: '3 hours',
    videos: 5,
    students: 150,
    level: 'Beginner',
    category: 'Technology',
    videoIds: ['9bZkp7q19f0']
  }
];

const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Mobile Development'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">Discover our comprehensive collection of courses</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FunnelIcon className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedLevel === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
          </p>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
